abstract class Student {
    private String id;
    private String name;
    
    public abstract void register();
    public abstract void PreTest();
    public abstract void PostTest();

    public void setID(String id){
        this.id = id;
    }
    
}
