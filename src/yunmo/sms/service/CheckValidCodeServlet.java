package yunmo.sms.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CheckValidCodeServlet extends HttpServlet {


	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		PrintWriter out = response.getWriter();
		String code = request.getParameter("param");
		String codeValidate = (String) request.getSession().getAttribute("codeValidate");
		if (codeValidate == null || !codeValidate.equalsIgnoreCase(code)){
			out.write("codeNotExist");
        }
		else{
			out.write("y");
		}
	}


	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
