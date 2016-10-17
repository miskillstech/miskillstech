<?php
namespace App\Http\Controllers;
use Request;
use DB;
use Illuminate\Http\RedirectResponse;
class Search extends Controller
{
    public function fnGetSearchData()
    {
        $requestData = Request::all();
        $allUserList = $this->userListAll(strtolower($requestData['key']));
        if(!empty($allUserList)) {
            $result = json_decode(json_encode($allUserList),TRUE);      
        }
        $moduleList = $this->moduleList(strtolower($requestData['key']));
        if(!empty($moduleList)) {
            $result = array_merge($result, json_decode(json_encode($moduleList),TRUE));
        }
        $newResult = array();
        $strReturnData = '';
        if(!empty($result)) {
            foreach($result as $key=>$val) {
                $newResult[] = strtolower($val['name']);
                if($key == 9) {
                    break;     
                }
            }
            $strReturnData = '["'.strtolower($requestData['key']).'",'.json_encode($newResult).']';
        }
        return $strReturnData;
    }
    public function userListAll($search_str) 
    {
        $usersData = DB::table('users')
            ->select(
                DB::raw('CONCAT_WS(" ", users.firstName, users.lastName) as name'),
                'users.id as uid'
            )
            ->where('users.isDeleted', '0')
            ->Where(function($query) use ($search_str)
            {
                $query->orWhere(DB::raw('CONCAT_WS(" ", users.firstName, users.lastName)'), 'LIKE', '%'.$search_str.'%');
            })
            ->limit(10)
            ->get();
        return $usersData;
    }
    public function moduleList($search_str)
    {
        $moduleData = DB::table('sectionsMaster')         
            ->select(
                'sectionsMaster.name',
                'sectionsMaster.stateName'
            )
            ->Where(function($query) use ($search_str) 
            {
                 $query->orWhere('sectionsMaster.name', 'LIKE', '%'.$search_str.'%');
            })
            ->where('sectionsMaster.isDeleted', '0')
             ->limit(10)
            ->get();
        return $moduleData;
    }
    public function fnShowResult()
    {
        $requestData = Request::all();
        $searchKey = strtolower($requestData['key']);
        $getSelectedUser = $this->userListAll($searchKey);
        if(!empty($getSelectedUser)) {
            $vrKey = $this->fnSearchForKey($searchKey, $getSelectedUser);
            if(is_numeric($vrKey)) {
                return new RedirectResponse('https://www.savantcare.com/internal/#/user/'.$getSelectedUser[$vrKey]->uid);
            }
        }
        $getSelectedModule = $this->moduleList($searchKey);
        if(!empty($getSelectedModule)) {
            $vrKey = $this->fnSearchForKey($searchKey, $getSelectedModule);
            if(is_numeric($vrKey)) {
                $arState = explode('.', $getSelectedModule[$vrKey]->stateName);
                $vrNewKey = count($arState) - 1;
                //$vrName = str_replace(' ', '',  strtolower($arState[$vrNewKey]));
                if($arState[$vrNewKey] == 'manual') {
                    return new RedirectResponse('https://www.savantcare.com/v3/app/manual/_book/');
                } else if($arState[$vrNewKey] == 'helpDeskReport') {
                    return new RedirectResponse('https://www.savantcare.com/internal/#/helpdeskreport/');
                }
                return new RedirectResponse('https://www.savantcare.com/internal/#/'.$arState[$vrNewKey]);
            }
        }
        print_r($requestData);
    }
    function fnSearchForKey($name, $array) {
        foreach ($array as $key => $val) {
            if (strtolower($val->name) == $name) {
                return $key;
            }
        }
        return null;
    }
}
