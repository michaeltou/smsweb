package yunmo.sms.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import yunmo.sms.bean.User;
import yunmo.sms.dao.UserDao;

public class CheckUserExistServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		response.setContentType("text/html; charset=utf-8");
		response.setHeader("cache-control", "no-cache");
		PrintWriter out = null;
		UserDao userDao = null;
			
		try {
			userDao = new UserDao();
			out = response.getWriter();
			String userName = request.getParameter("param");
			User user = userDao.getUserByName(userName);
			
			if (null != user) {
				out.write("userExist");
			} else {
				out.write("y");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		out.close();
	}


	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
