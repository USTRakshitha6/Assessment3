package com.dev.collections;

import java.util.HashSet;

public class Empimp implements Emp {
	
	HashSet<Employees> hs=new HashSet<Employees>();

	@Override
	public boolean addEmp(Employees e) {
		if(e!=null) {
			hs.add(e);
			return true;
		}
		return false;
	}

	@Override
	public void getEmp() {
		System.out.println(hs);
		
	}

	@Override
	public boolean removeEmp(Employees e) {
		boolean b=hs.remove(e);
		System.out.println(b);
		System.out.println(hs);
		return false;
	}

	
}
