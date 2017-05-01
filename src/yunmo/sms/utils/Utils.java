package yunmo.sms.utils;

import java.io.InputStream;

import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import yunmo.sms.service.RegisterServlet;


public class Utils {

	public static SqlSessionFactory getFactory(){
		
		InputStream inputStream = RegisterServlet.class.getClassLoader().getResourceAsStream("config.xml");
		//InputStream inputStream = Thread.currentThread().getContextClassLoader().getResourceAsStream("/config.xml");
		//InputStream inputStream = ClassLoader.getSystemResourceAsStream("/config.xml");
		SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(inputStream);
		return factory;
	}
}
