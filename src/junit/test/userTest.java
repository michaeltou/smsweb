package junit.test;

import java.io.InputStream;
import java.util.Date;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import yunmo.sms.bean.User;
import yunmo.sms.dao.UserDao;
import yunmo.sms.utils.Utils;

public class userTest {

	
	@Test
	public void Add(){
		SqlSessionFactory factory = Utils.getFactory();
		SqlSession session = factory.openSession();
		
		String statement = "yunmo.sms.bean.userMapper.adduser";
		User user = new User(-1, "jack", "yunmo","123456","18717947096",new Date(),"1");
		Integer insert = session.insert(statement,user);
		session.commit();
		System.out.println(insert);
		
	}
	
	@Test
	public void testGet(){
		
		SqlSessionFactory factory = Utils.getFactory();
		SqlSession session = factory.openSession();
		
		String statement = "yunmo.sms.bean.userMapper.getUser";
		User user =  session.selectOne(statement, 1);
		System.out.println(user.toString());
	}
	
	@Test
	public void testGetByName(){
		
		SqlSessionFactory factory = Utils.getFactory();
		SqlSession session = factory.openSession();
		
		String statement = "yunmo.sms.bean.userMapper.getUserByName";
		User user =  session.selectOne(statement, "jack");
		System.out.println(user.toString());
	}
	
	@Test
	public void DaoAdd(){
		
		UserDao dao = new UserDao();
		User user = new User(-1, "jack3", "yunmo","123456","18717947096",new Date(),"1");
		dao.Save(user);
	}
}
