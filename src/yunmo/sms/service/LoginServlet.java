package yunmo.sms.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import yunmo.sms.bean.User;
import yunmo.sms.dao.UserDao;
import yunmo.sms.utils.ServiceUtils;

public class LoginServlet extends HttpServlet {


	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		String userName = request.getParameter("txtName");
		String password = request.getParameter("txtPwd");
		password = ServiceUtils.md5(password);
		UserDao userDao = new UserDao();
		
		User user = userDao.getUserByName(userName);
		if (user!= null && user.getPassword().equals(password)) {
			request.getSession().setAttribute("user", user);
			String json = "{\"info\":\"登录成功！\",\"status\":\"y\"}";
			out.write(json);
			//response.sendRedirect("/sms/index.html");
		}	
		else{
			String json = "{\"info\":\"用户名和密码不一致！\",\"status\":\"n\"}";
			out.write(json);
		}
	}


	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request,response);

	}

}
