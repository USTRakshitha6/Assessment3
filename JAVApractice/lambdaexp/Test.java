package com.dev.lambdaexp;

public class Test {
	
	public static void main(String[] args) {
		FunctInt f = () -> {
			for (int i = 1; i <= 10; i++) {
				System.out.println("i =" +i);
			}
		};
		f.printVal();
		
		FunctInt1 f1 = () -> System.out.println("Functional Interface");
		f1.dis();
		
		FunctInt2 f2 = () -> {
			try {
				int i=10/0;
				System.out.println(i);
			} catch (Exception e) {
				System.out.println("Exception Occured");
			}
		};
		f2.display();
		
		FunctInt3 f3 = (int i) -> {
			for(int j=1; j<=i; j++) {
				System.out.println(j);
			}
		};
		f3.display(5);
	}
}
