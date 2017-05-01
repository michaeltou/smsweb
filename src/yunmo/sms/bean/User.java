package yunmo.sms.bean;

import java.util.Date;

public class User {

	private Integer id;
	
	private String userName;
	
	private String companyName;
	
	private String password;
	
	private String telNo;
	
	private Date registerDate;
	
	private String status;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTelNo() {
		return telNo;
	}

	public void setTelNo(String telNo) {
		this.telNo = telNo;
	}

	public Date getRegisterDate() {
		return registerDate;
	}

	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}
	
	

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public User(Integer id, String userName, String companyName,
			String password, String telNo, Date registerDate, String status) {
		super();
		this.id = id;
		this.userName = userName;
		this.companyName = companyName;
		this.password = password;
		this.telNo = telNo;
		this.registerDate = registerDate;
		this.status = status;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", companyName="
				+ companyName + ", password=" + password + ", telNo=" + telNo
				+ ", registerDate=" + registerDate + ", status=" + status + "]";
	}

	
	
	
	
	
}
