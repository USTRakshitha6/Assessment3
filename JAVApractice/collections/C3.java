package com.dev.collections;

import java.util.TreeSet;
import com.dev.encapsulation.Dogs;

public class C3 {

	public static void main(String[] args) {
		TreeSet<Dogs> ts=new TreeSet<Dogs>();
		Dogs d=new Dogs();
		d.setAge(10);
		d.setBreed("D M");
		d.setName("Shiro");
		d.setColor("Black");

		Dogs d1=new Dogs();
		d1.setAge(5);
		d1.setBreed("Dalmation");
		d1.setName("Ronnie");
		d1.setColor("Black&White");
		
		Dogs d2=new Dogs();
		d2.setAge(2);
		d2.setBreed("Dalmation");
		d2.setName("Nikkie");
		d2.setColor("Black&White");
		
		ts.add(d);
		ts.add(d1);
		ts.add(d2);
		System.out.println(ts);

	}

}
