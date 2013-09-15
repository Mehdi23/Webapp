package org.mehdi.project.datastore.entities;


import org.codehaus.jackson.annotate.JsonProperty;

import com.googlecode.objectify.annotation.*;

@Entity
public class Car {
	@Id
	@JsonProperty("id")
	private long id;
	
	@Index
	@JsonProperty("license")
	private String license;
	
	@JsonProperty("color")
	private int color;
	
	private Car() {
	}

	public Car(long id, String license, int color) {
		this.id = id;
		this.license = license;
		this.color = color;
	}
	
	public long getId() {
		return id;
	}
	
	public String getLicense() {
		return license;
	}
	
	public int getColor() {
		return color;
	}

}
