package com.dev.collections;

import java.util.HashMap;

public class IntImp implements EmpInt {
	HashMap<String, Employees> hm = new HashMap<String, Employees>();

	@Override
		public Employees putEmp(String k, Employees e) {
			if(e!=null) {
				hm.put(k,e);
			
			  if(e!=null) { 
				  Employees b=hm.put(k, e);
				  return b; 
				  }
			 
			}
			return null;
		}

	@Override
	public void getEmp() {
		System.out.println(hm);

	}

	@Override
	public Employees remEmp(String k, Employees e) {
		Employees b1 = hm.remove("1");
		System.out.println(b1);
		return b1;
	}

}
