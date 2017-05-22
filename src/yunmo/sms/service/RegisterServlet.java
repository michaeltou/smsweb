package yunmo.sms.service;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import yunmo.sms.bean.User;
import yunmo.sms.dao.UserDao;
import yunmo.sms.utils.ServiceUtils;

public class RegisterServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String userName = request.getParameter("userName");
		String companyName = request.getParameter("companyName");
		String password = request.getParameter("password");
		password = ServiceUtils.md5(password);
		String telNo = request.getParameter("telNo");
		UserDao userDao = new UserDao();		
		User user = userDao.getUserByName(userName);

		if (user == null) {
			user = new User(-1, userName, companyName, password, telNo, new Date());
			userDao.Save(user);
			response.sendRedirect("/sms/index.html");
		}
		else {
			//request.getRequestDispatcher("/sms/register.html").forward(request, response);
			response.sendRedirect("/sms/register.html");
		}

	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
