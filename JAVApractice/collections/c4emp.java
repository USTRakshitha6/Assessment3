package com.dev.collections;

import java.util.TreeSet;

public class c4emp {

	public static void main(String[] args) {
		TreeSet<Employees> ts1=new TreeSet<Employees>();
		Employees e=new Employees();
		e.setEmail("syeda@gmail.com");
		e.setId(1);
		e.setName("Syeda");
		e.setPassword("s123");
		
		Employees e1=new Employees();
		e1.setEmail("umme@yahoo.com");
		e1.setId(5);
		e1.setName("umme");
		e1.setPassword("umme567");
		
		Employees e2=new Employees();
		e2.setEmail("tina@gmail.com");
		e2.setId(4);
		e2.setName("Tina mathur");
		e2.setPassword("mat234");
		
		ts1.add(e);
		ts1.add(e1);
		ts1.add(e2);
		System.out.println(ts1);

	}

}
