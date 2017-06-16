package yunmo.sms.service;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import yunmo.sensitiveword.test.SensitivewordFilter;

public class CheckSensitiveWordServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		SensitivewordFilter filter = new SensitivewordFilter();
		// System.out.println("敏感词的数量：" + filter.sensitiveWordMap.size());

		String string = request.getParameter("checkdata");
		/*
		 * System.out.println(string); System.out.println("待检测语句字数：" +
		 * string.length()); long beginTime = System.currentTimeMillis();
		 * Set<String> set = filter.getSensitiveWord(string, 1); long endTime =
		 * System.currentTimeMillis(); System.out.println("语句中包含敏感词的个数为：" +
		 * set.size() + "。包含：" + set); System.out.println("总共消耗时间为：" + (endTime
		 * - beginTime));
		 */
		Set<String> set = filter.getSensitiveWord(string, 1);
		String sensitiveWord = "";
		for (String str : set) {
			if(!"".equals(sensitiveWord)){
				sensitiveWord += ",";
			}
			sensitiveWord += str;
		}
		out.write(sensitiveWord);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
