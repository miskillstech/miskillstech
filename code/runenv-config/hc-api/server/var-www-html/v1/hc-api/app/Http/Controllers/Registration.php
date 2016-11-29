<?php
namespace App\Http\Controllers;
use Request;
use DB;
class Registration extends Controller
{
    public function fnCabRegistration()
    {
		$requestData = Request::all();
		$firstName = $requestData['firstName'];
		$lastName = $requestData['lastName'];
		$phone = $requestData['phone'];
		$password = $requestData['password'];
		$arUserCheckByPhone = DB::table('users')
            ->select(
                'users.id'
            )
            ->where('users.phone', $phone)
            ->first();
	    if(empty($arUserCheckByPhone)) {
			$id = DB::table('users')->insertGetId(
				['firstName' => $firstName, 'lastName' => $lastName, 'phone' => $phone, 'password' => $password, 'roleId' => '2']
			);
			$arUserData = DB::table('users')
				->select(
					'users.id as uid',
					'users.firstName',
					'users.lastName',
					'users.phone',
					'users.email'
				)
				->where('users.id', $id)
				->first();
				if(!empty($arUserData)) {
					return array('status' => 'success', 'data' => $arUserData);
				} else {
					return array('status' => 'fail', 'message' => 'Something went wrong.');
				}
		} else {
			return array('status' => 'fail', 'message' => 'User with this phone no. already exist.');
		}
    }
}
