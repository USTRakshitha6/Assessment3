package com.dev.collections;

public class Edata {

	public static void main(String[] args) {
		IntImp in=new IntImp();
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
		
		Employees b=in.putEmp("1",e);
		Employees b1=in.putEmp("2",e1);
		System.out.println(b+ " " +b1);
		
		in.getEmp();
		
		in.remEmp("1", e);
	}

}
