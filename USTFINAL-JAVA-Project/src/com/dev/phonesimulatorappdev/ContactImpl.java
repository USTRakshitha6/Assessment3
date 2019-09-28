package com.dev.phonesimulatorappdev;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;

public class ContactImpl {

	public static void main(String[] args) {
		ArrayList<Contact> hm = new ArrayList<Contact>();
		Scanner sc = new Scanner(System.in);

		ContactDetails b = new ContactDetails();
		Contact c1 = new Contact();
		Contact c2 = new Contact();
		Contact c3 = new Contact();
		
		int op;
		do {
			System.out.println("Press 1 to get Register, press 2 to Search,press 3 to Operate");
			int option = sc.nextInt();
			
			switch(option)
			{
			case 1 :
				System.out.println("Enter Name");
				String w = sc.next();
				c1.setName(w);
				System.out.println("Enter phone number");
				long x = sc.nextLong();
				c1.setnumber(x);
				System.out.println("Enter group Type");
				String y = sc.next();
				c1.setGroup(y);
				hm.add(c1);
				System.out.println("Contact number is Added");
				System.out.println("To add another number press 1 ");
				int z = sc.nextInt();
				if(z==1)
				{
					System.out.println("enter name");
					String m = sc.next();
					c2.setName(m);
					if(c1.getName().equals(c2.getName()))
					{
						System.out.println("name is already in contact");

					}
					else {
						System.out.println("enter phone no");
						long u = sc.nextLong();
						c2.setnumber(u);
						System.out.println("enter group type");
						String l1 = sc.next();
						c2.setGroup(l1);
						hm.add(c2);
					}

				}
				System.out.println("=================================================");


				HashSet<Contact> arr = new HashSet<>(hm);
		
				System.out.println(arr);
				System.out.println("contact name will be displayed");
				System.out.println(c1.getName());
				System.out.println(c2.getName());

				break;
			case 2 :
				System.out.println("enter user name");
				String n = sc.next();
				if(n.equals(c1.getName()))
				{
					System.out.println(c1);
					b.contact(c1);



				}
				else if(n.equals(c2.getName()))
				{
					System.out.println(c2);
					b.contact(c2);
				}
				else
					System.out.println("name not in contact");
				break;
			case 3 :
				System.out.println("wellcome to CURD Operations");
				System.out.println("1 to delete 2 to edit");
				int s=sc.nextInt();
				if(s==1)
				{
					System.out.println(c2);
					hm.remove(c2);
					System.out.println(c2);

				}
				else if(s==2)
				{
					System.out.println(c1);
					b.editContact(c1);
					System.out.println(c1);
				}
				else
					System.out.println("invalid");
				break;



			default :
				System.out.println("invalid input");


			}
			System.out.println(" press 1 to continue // press 0 to exit");
			op = sc.nextInt();

		}while(op==1);
		
		System.out.println("thanks");
	}


}


