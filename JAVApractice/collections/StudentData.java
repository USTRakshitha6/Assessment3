package com.dev.collections;

public class StudentData {

	public static void main(String[] args) {
		ImpInt im=new ImpInt();
		Students s=new Students();
		s.setUsn(76);
		s.setBranch("cs");
		s.setName("Syeda");
		
		Students s1=new Students();
		s1.setUsn(71);
		s1.setBranch("ec");
		s1.setName("jeevitha");
		
		Students b=im.addStu("1", s);
		Students b1=im.addStu("2", s);

		im.getStu();
	
		im.upStu("", s);
		im.remStu("", s);
		
		
				
	}

}
