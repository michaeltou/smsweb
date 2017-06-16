package yunmo.sms.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoaddataServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("doGet");
		//request.setAttribute("surplusCount", 10);
		/*request.getSession().setAttribute("surplusCount", 10);
		request.getSession().setAttribute("todaysentcount", 10000);
		request.getSession().setAttribute("todaysentsuccesscount", 9990);
		request.getSession().setAttribute("todaysentfailcount", 3);
		request.getSession().setAttribute("todaysentunknowncount", 7);
		request.getSession().setAttribute("todayrequestfailcount", 3);*/
		
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.write("10,10000,99.9,0.07,0.03,3");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

}
