abstract class SuperHero {

    private String name;
    private String age;
    private String job;

    public void setName(String name){
        this.name = name;
    }
    public void setAge(String age){
        this.age = age;
    }
    public void dispHero(){
        System.out.println("Name = " + this.name);
        System.out.println("age = " + this.age);
    }
    public abstract void skill(String skill);
    
}
