package com.dev.collections;

import java.util.HashSet;

public class C2Hash extends Employees {

	public static void main(String[] args) {
		HashSet<Employees> hs=new HashSet<Employees>();
		Employees e=new Employees();
		e.setEmail("syeda@gmail.com");
		e.setId(1);
		e.setName("Syeda");
		e.setPassword("s123");
		
		Employees e1=new Employees();
		e1.setEmail("umme@yahoo.com");
		e1.setId(2);
		e1.setName("umme");
		e1.setPassword("umme567");
		
		Employees e2=new Employees();
		e2.setEmail("tina@gmail.com");
		e2.setId(4);
		e2.setName("Tina mathur");
		e2.setPassword("mat234");
		
		
		//updating elements
		/*
		 * e.setEmail("sy@gmail.com"); e1.setEmail("ummeirum@yahoo.com");
		 * e2.setEmail("mathur@gmail.com");
		 */
		
		//adding elements
		/*
		 * boolean b1=hs.add(e); boolean b2=hs.add(e1); boolean b3=hs.add(e2);
		 * System.out.println("HashSet is: " +b1+ " " +b2+ " " +b3);
		 * System.out.println(hs);
		 */
		
		//to know the size of elements present
		/*
		 * System.out.println("Size of HashSet elements: "+hs.size());
		 * 
		 * System.out.println("Hashset after removing the element: "+hs.remove(e1));
		 * System.out.println(hs);
		 * 
		 * //removing elements
		 * System.out.println("Size of HashSet after removing element: "+hs.size());
		 * 
		 * //clearing elements hs.clear();
		 * System.out.println("Size of HashSet elements after clearing: "+hs.size());
		 */
	}

}
