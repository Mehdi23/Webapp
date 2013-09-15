package org.mehdi.project.webapp.facade;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


import org.mehdi.project.datastore.entities.Car;
import org.mehdi.project.webapp.rest.Car_Client;

/**
 * Example resource class hosted at the URI path "/myresource"
 */
@Path("/myresource")
public class CarFacade {

	@GET
	@Produces(MediaType.TEXT_HTML)
	public String displayCar() {
		return Car_Client.getCar();
	}
	
	@POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Car createCar(Car car) {
		Car_Client.addCar(car.getId(), car.getLicense(), car.getColor());
        return car;
    }

}
