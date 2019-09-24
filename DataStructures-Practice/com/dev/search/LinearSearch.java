package com.dev.search;

public class LinearSearch {
	
//	int [] array = new int[5];

	
	
	
	public boolean contains(int [] arr, int value) {
		for( int i = 0;i<=arr.length-1;i++)
		{
			if(arr[i]==value)
			{
				return true;
			}
			return false;
		}
		return false;
		
	}

	public static void main(String[] args, int arr) {
		int [] array = {66,77,88,99,100};
		System.out.println(arr, 88);
		
		

	}

}
