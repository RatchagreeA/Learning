class Accounting extends Employee{

    public Accounting(String name, Double salary){
        
        super(name,salary);
        System.out.println("I'm Accounting");
    }
    // Override
    public void bonus(){
        System.out.println("Bonus = 15%");
    }
}
