<?php
namespace App\Http\Controllers;
use Request;
use DB;
class Login extends Controller
{
    public function fnCabLogin()
    {
        $requestData = Request::all();
		$login = $requestData['login'];
		$password = $requestData['password'];
        $arUserCheckByPhone = DB::table('users')
            ->select(
                'users.id'
            )
            ->where('users.phone', $login)
            ->first();
        if(!empty($arUserCheckByPhone)) {
            $arUserData = DB::table('users')
            ->select(
                'users.id as uid',
                'users.firstName',
                'users.lastName',
                'users.phone',
                'users.email'
            )
            ->where('users.id', $arUserCheckByPhone->id)
            ->where('users.password', $password)
            ->first();
			if(!empty($arUserData)) {
				return array('status' => 'success', 'data' => $arUserData);
			} else {
				return array('status' => 'fail', 'message' => 'Incorrect password.');
			}
        } else {
			$arUserCheckByEmail = DB::table('users')
            ->select(
                'users.id',
                'users.firstName',
                'users.lastName',
                'users.phone',
                'users.email'
            )
            ->where('users.email', $login)
            ->first();
			if(!empty($arUserCheckByEmail)) {
				$arUserData = DB::table('users')
				->select(
					'users.id as uid',
					'users.firstName',
					'users.lastName',
					'users.phone',
					'users.email'
				)
				->where('users.id', $arUserCheckByEmail->id)
				->where('users.password', $password)
				->first();
				if(!empty($arUserData)) {
					return array('status' => 'success', 'data' => $arUserData);
				} else {
					return array('status' => 'fail', 'message' => 'Incorrect password.');
				}
			} else {
				return array('status' => 'fail', 'message' => 'User not found.');
			}
		}
    }
}
