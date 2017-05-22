package yunmo.sms.dao;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import yunmo.sms.bean.User;
import yunmo.sms.utils.Utils;

public class UserDao {
	
	
	public UserDao() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void Save(User user){	
		
		SqlSessionFactory factory = Utils.getFactory();
		SqlSession session = factory.openSession();
		String statement = "yunmo.sms.bean.userMapper.adduser";
		session.insert(statement,user);
		session.commit();
	}
	
	public User getUser(Integer id){
		
		SqlSessionFactory factory = Utils.getFactory();
		SqlSession session = factory.openSession();
		String statement = "yunmo.sms.bean.userMapper.getUser";
		User user =  session.selectOne(statement, id);
		return user;
	}
	
	public User getUserByName(String userName){
		
		SqlSessionFactory factory = Utils.getFactory();
		SqlSession session = factory.openSession();
		
		String statement = "yunmo.sms.bean.userMapper.getUserByName";
		User user =  session.selectOne(statement, userName);
		return user;
	}
}
