package org.mehdi.project.datastore.dao;

import org.mehdi.project.datastore.entities.Car;

import com.googlecode.objectify.ObjectifyService;


import static com.googlecode.objectify.ObjectifyService.ofy;

public class CarDAO {
	
	public String createCar(long id, String license, int color)
    {
		ObjectifyService.register(Car.class);
		Car car = new Car(id, license, color);
		ofy().save().entity(car).now();    // async without the now()
		return ""+car.getId();

    }
	
	public Car readCar(long id)
    {
		ObjectifyService.register(Car.class);
		Car car = ofy().load().type(Car.class).id(id).now();
		return car;
    }
	
	public String deleteCar(long id)
    {
		ObjectifyService.register(Car.class);
		Car car = ofy().load().type(Car.class).id(id).now();
		ofy().delete().entity(car);
		return "isDeleted";
    }
	

}
