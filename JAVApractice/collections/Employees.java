package com.dev.collections;

public class Employees {
//implements Comparable<Employees> {
	private String Name;
	private int id;
	private String email;
	private String password;
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Employees [Name=" + Name + ", id=" + id + ", email=" + email + ", password=" +"********"+ "]";
	}
	/*
	 * @Override public int compareTo(Employees e) { // TODO Auto-generated method
	 * stub return (this.id-e.id); }
	 */
	
	
	
	

}
