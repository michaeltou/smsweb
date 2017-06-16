package yunmo.sms.utils;

import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import yunmo.sms.service.RegisterServlet;

import java.io.InputStream;


public class Utils {

	public static SqlSessionFactory getFactory(){

		System.out.println("加载数据库配置文件.");
		InputStream inputStream = RegisterServlet.class.getClassLoader().getResourceAsStream("config.xml");
		//InputStream inputStream = Thread.currentThread().getContextClassLoader().getResourceAsStream("/config.xml");
		//InputStream inputStream = ClassLoader.getSystemResourceAsStream("/config.xml");
		SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(inputStream);
		return factory;
	}
}
