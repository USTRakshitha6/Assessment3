package com.dev.collections;

public class EmpData {

	public static void main(String[] args) {
		
		Empimp ei=new Empimp();
		Employees e=new Employees();
		e.setEmail("syeda@gmail.com");
		e.setId(1);
		e.setName("syeda");
		e.setPassword("12345");
		
		Employees e1=new Employees();
		e1.setEmail("umme@yahoo.com");
		e1.setId(2);
		e1.setName("umme");
		e1.setPassword("umme567");
		
		boolean b=ei.addEmp(e);
		boolean b1=ei.addEmp(e1);
		System.out.println(b+ " " +b1);
		
		ei.getEmp();
		
		ei.removeEmp(e);
	
	}

}
