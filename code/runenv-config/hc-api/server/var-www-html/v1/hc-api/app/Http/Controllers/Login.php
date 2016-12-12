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
				$phoneVerified = 'no';
				$arPhoneData = DB::table('users_phone_verification_detail')
				->select(
					'users_phone_verification_detail.id'
				)
				->where('users_phone_verification_detail.uid', $arUserData->uid)
				->where('users_phone_verification_detail.isVerified', 'yes')
				->first();
				if(!empty($arPhoneData)){
					$phoneVerified = 'yes';
				}
				return array('status' => 'success', 'data' => $arUserData, 'phoneVerified' => $phoneVerified);
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
					$phoneVerified = 'no';
					$arPhoneData = DB::table('users_phone_verification_detail')
					->select(
						'users_phone_verification_detail.id'
					)
					->where('users_phone_verification_detail.uid', $arUserData->uid)
					->where('users_phone_verification_detail.isVerified', 'yes')
					->first();
					if(!empty($arPhoneData)){
						$phoneVerified = 'yes';
					}
					return array('status' => 'success', 'data' => $arUserData, 'phoneVerified' => $phoneVerified);
				} else {
					return array('status' => 'fail', 'message' => 'Incorrect password.');
				}
			} else {
				return array('status' => 'fail', 'message' => 'User not found.');
			}
		}
    }
}
