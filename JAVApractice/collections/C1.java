package com.dev.collections;

import java.util.HashSet;

import com.dev.encapsulation.Dogs;

public class C1 {

	public static void main(String[] args) {
		HashSet<Dogs> hs=new HashSet<Dogs>();
		Dogs d=new Dogs();
		d.setAge(1);
		d.setBreed("D M");
		d.setName("Shiro");
		d.setColor("Black");

		Dogs d1=new Dogs();
		d1.setAge(2);
		d1.setBreed("Dalmation");
		d1.setName("Ronnie");
		d1.setColor("Black&White");
		
		Dogs d2=new Dogs();
		d2.setAge(2);
		d2.setBreed("Dalmation");
		d2.setName("Nikkie");
		d2.setColor("Black&White");
		
		d.setAge(2);
		d1.setAge(3);
		d2.setAge(5);
		
		boolean b= hs.add(d);
		boolean b1=hs.add(d1);
		boolean b3=hs.add(d2);
		System.out.println("Output is: " +b+ " " +b1+ " " +b3);
		System.out.println(hs);
		
		System.out.println("Size of HashSet: "+hs.size());
		
		boolean b2=hs.remove(d);
		System.out.println("Remove: " +b2);
		System.out.println(hs);
		
		System.out.println("Output of contains(): "+hs.contains(d));
		
		System.out.println("Size of HashSet: "+hs.size());
		
		hs.clear();
		System.out.println("Size of HashSet after clear(): "+hs.size());
	}

}
