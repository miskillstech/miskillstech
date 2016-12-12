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
	public function fnGetOTPForPhoneVerification($prId) {
		$otp = $this->generateRandomString();
		$arPhoneData = DB::table('users_phone_verification_detail')
				->select(
					'users_phone_verification_detail.id'
				)
				->where('users_phone_verification_detail.uid', $prId)
				->first();
		if(!empty($arPhoneData)) {
			DB::table('users_phone_verification_detail')
				->where('id', $arPhoneData->id)
				->update(array('verificationCode' => $otp, 'isVerified' => 'no'));
		} else {
			DB::table('users_phone_verification_detail')->insert(
				['uid' => $prId, 'verificationCode' => $otp]
			);
		}
		return array('status' => 'success', 'otp' => $otp);
	}
	public function fnVerifyOTPForPhone() {
		$requestData = Request::all();
		$uid = $requestData['uid'];
		$otp = $requestData['otp'];
		$arPhoneData = DB::table('users_phone_verification_detail')
				->select(
					'users_phone_verification_detail.id'
				)
				->where('users_phone_verification_detail.uid', $uid)
				->where('users_phone_verification_detail.verificationCode', $otp)
				->first();
		if(!empty($arPhoneData)) {
			DB::table('users_phone_verification_detail')
				->where('id', $arPhoneData->id)
				->update(array('isVerified' => 'yes'));
				return array('status' => 'success');
		} else {
			return array('status' => 'fail', 'message' => 'otp not matched! please try again.');
		}
	}
	public function generateRandomString($length = 5) {
		return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
	}
}