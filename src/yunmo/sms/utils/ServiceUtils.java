package yunmo.sms.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import sun.misc.BASE64Encoder;

public class ServiceUtils {

public static String md5(String message){
		
		MessageDigest md;
		try {
			md = MessageDigest.getInstance("md5");
			byte md5[] = md.digest(message.getBytes());
			//按照如下方法设置Eclipse导入%JAVA_HOME%\jre\lib目录下的rt.jar包即可，
			//Project->Properties,选择Java Build Path设置项，再选择Libraries标签，
			//Add External Jars添加%JAVA_HOME%\jre\lib\rt.jar就可以使用啦!
			BASE64Encoder encoder = new BASE64Encoder();
			return encoder.encode(md5);
			
		} catch (NoSuchAlgorithmException e) {
			throw new RuntimeException();
		}
	}
}
