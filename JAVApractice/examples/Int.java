package com.dev.examples;

public class Int {

	static int i=0101;//its octane value for binary we need to specify 0b0101
	static int j=10;
	static int k=11;
	public static void main(String[] args) {
		System.out.println(i);
		System.out.println(j++);//10
		System.out.println(++k);//12
		System.out.println(++j + k++);//24
		
		String s1="Myran";
		String s2="Ryan";
		//s1=s2;
		System.out.println(s2=s1);

	}

}
