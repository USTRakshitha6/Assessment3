package com.dev.collections;

import java.util.ArrayList;
import com.dev.encapsulation.Dogs;

public class C4 {

	public static void main(String[] args) {
		ArrayList<Dogs> ar=new ArrayList<Dogs>(2);
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
		
		ar.add(d);
		ar.add(d1);
		ar.add(d2);
		System.out.println(ar);
		
		ar.trimToSize();
		System.out.println("size of array before the trimToSize(): " +ar.size());
		
	}

}
