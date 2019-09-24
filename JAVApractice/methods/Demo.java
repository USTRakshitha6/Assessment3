package com.dev.methods;

import com.dev.encapsulation.Dogs;
//import statements for same class name cannot be given instead we use fully qualified class and create the object 

public class Demo {
	
	final static int I=1;//whenever we are declaring variable with final keyword we need to name variable in block letter
//	Dogs d = new Dogs();
//	com.dev.constructors.Dogs d1=new com.dev.constructors.Dogs();

	final static void print() {
		System.out.println("Print() of class Demo");
	}
	public static void main(String[] args) {
		System.out.println(I);
		//i=10;cannot reinitialize the variable because it has a final keyword
	}
}
