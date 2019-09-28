package com.dev.phonesimulatorappdev;
import java.util.Scanner;


public class ContactDetails {
	Scanner sc = new Scanner(System.in);

	public void contact(Contact value)
	{
		int z;
		do {
		System.out.println("enter 1 to call // enter 2 to message");
       int i = sc.nextInt();
       if(i==1)
       {
    	   System.out.println("enter the number to  which you have to make a call");
    	    long p = sc.nextLong();
    	    System.out.println("calling............"+p);
    	    
    	    System.out.println("call ended !!!");
       }
       else if(i==2)
       {
    	   System.out.println("enter the message you want to send");
   	    String s = sc.next();
   	    value.setMessage(s);
   	    System.out.println("message is sending now");
    	   
       }
       else
       {
    	   System.out.println("invalid.......");
       }
       System.out.println("enter 1 to continue 2 go out");
        z = sc.nextInt();
		}while(z==1);
		
		}
	
	
	public void editContact(Contact value)
	{
		System.out.println("enter name");
		String s3= sc.next();
		value.setName(s3);
		System.out.println("enter phoneNo");
		long s4= sc.nextLong();
		value.setnumber(s4);
		
		
	}

}
