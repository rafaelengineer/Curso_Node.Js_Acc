public class Person {
			
    // Constructor
    public Person() {    }

    public void wakeUp() {
        // do wakeup stuff
        System.out.println("Acordar");
    }
    public void putOnPants() {
        // do the putting on of pants
        System.out.println("Colocar calças");
    }
    public void putOnShirt() {
        // do the putting on of a shirt
        System.out.println("Colocar camisa");
    }
    public void putOnShoes() {
        // put those shoes on, boi
        System.out.println("Colocar sapatos");
    }
    public void goToSchool() {
        // now go to school!
        System.out.println("Ir para escola");
    }

    public static void main(String [] args){
        Person person = new Person();
        person.wakeUp();		// 1st we do this
        person.putOnPants();	// then this
        person.putOnShirt();	// then this
        person.putOnShoes();	// then this
        person.goToSchool();	// and finally this
    }
}