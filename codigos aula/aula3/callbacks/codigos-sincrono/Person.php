<?php

class Person {
    public function __construct() {  }

    public function wakeUp() {
        // do wakeup stuff
        echo "Acordar\n";
    }

    public function putOnPants() {
        // do the putting on of pants
        echo "Colocar calças\n";
    }

    public function putOnShirt() {
        // do the putting on of a shirt
        echo "Colocar camisa\n";
    }

    public function putOnShoes() {
        // put those shoes on, boi
        echo "Colocar sapatos\n";
    }

    public function goToSchool() {
        // now go to school!
        echo "Ir para escola\n";
    }
}

$person = new Person();
$person->wakeUp();    // 1st we do this
$person->putOnPants(); // then this
$person->putOnShirt(); // then this
$person->putOnShoes(); // then this
$person->goToSchool(); // and finally this

