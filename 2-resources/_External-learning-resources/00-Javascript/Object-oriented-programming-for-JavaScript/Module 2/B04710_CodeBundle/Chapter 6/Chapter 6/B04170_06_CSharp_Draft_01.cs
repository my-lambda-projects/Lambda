public interface IAnimal
{
    string Name { get; set; }

    void Dance();
    void Say(string message);
    void SayGoodbye(IAnimal destination);
    void SayWelcome(IAnimal destination);
    void Sing(); 
}



public abstract class Animal: IAnimal, IEquatable<IAnimal>
{
    protected string _name;

    public string Name 
    { 
        get { return this._name; } 
        set { throw new InvalidOperationException("Name is a read-only property."); }
    }

    public virtual string DanceCharacters { get { return string.Empty; } }
    public virtual string SpelledSound1 { get { return string.Empty; } }
    public virtual string SpelledSound2 { get { return string.Empty; } }
    public virtual string SpelledSound3 { get { return string.Empty; } }
        
    public Animal(string name)
    {
        this._name = name;
    }

    public void Dance()
    {
        Console.WriteLine(
            String.Format(
                "{0} dances {1}",
                this.Name,
                DanceCharacters));
    }

    public bool Equals(IAnimal otherAnimal)
    {
        return (this == otherAnimal);
    }

    public void Say(string message)
    {
        Console.WriteLine(
            String.Format(
                "{0} says: {1}",
                this.Name, message));
    }

    public void SayGoodbye(IAnimal destination)
    {
        Console.WriteLine(
            String.Format(
                "{0} says goodbye to {1}: {2} {3} {4}",
                this.Name,
                destination.Name,
                SpelledSound1,
                SpelledSound3,
                SpelledSound1));
    }

    public void SayWelcome(IAnimal destination)
    {
        Console.WriteLine(
            String.Format(
                "{0} welcomes {1}: {2}",
                this.Name,
                destination.Name,
                SpelledSound2));
    }

    public void Sing()
    {
        var spelledSingSound = SpelledSound1 + " ";
        var sb = new StringBuilder();
        sb.Append(String.Format("{0} sings: ", this.Name));
        sb.Append(String.Concat(Enumerable.Repeat(spelledSingSound, 3)));
        sb.Append(". ");
        sb.Append(String.Concat(Enumerable.Repeat(spelledSingSound, 2)));
        sb.Append(". ");
        sb.Append(spelledSingSound);
        sb.Append(". ");
        Console.WriteLine(sb.ToString());
    }
}



public class Dog: Animal
{
    public override string SpelledSound1 
    { 
        get { return "Woof"; } 
    }
    public override string SpelledSound2
    {
        get { return "Wooooof"; } 
    }

    public override string SpelledSound3 
    { 
        get { return "Grr"; } 
    }

    public override string DanceCharacters 
    { 
        get { return @"/-\ \-\ /-/"; } 
    }

    public Dog(string name): base(name)
    {
    }
}



public class Frog: Animal
{
    public override string SpelledSound1 
    { 
        get { return "Ribbit"; } 
    }
        
    public override string SpelledSound2 
    { 
        get { return "Croak"; } 
    }

    public override string SpelledSound3 
    { 
        get { return "Croooaaak"; } 
    }
        
    public override string DanceCharacters 
    { 
        get { return @"/|\ \|/ ^ ^ "; } 
    }

    public Frog(string name)
        : base(name)
    {
    }
}



public class Party<T> where T: IAnimal
{
    private List<T> _members;

    public T Leader { get; private set; }
	
	    public Party(T leader)
    {
        this.Leader = leader;
        this._members = new List<T>();
        this._members.Add(leader);
    }

	    public void AddMember(T member)
    {
        this._members.Add(member);
        Leader.SayWelcome(member);
    }

	    public bool RemoveMember(T member)
    {
        if (member.Equals(this.Leader))
        {
            throw new InvalidOperationException("You cannot remove the leader from the party.");
        }
        var result = this._members.Remove(member);
        if (result)
        {
            member.SayGoodbye(this.Leader);
        }
        return result;
    }

	    public virtual void Dance()
    {
        foreach (var member in _members)
        {
            member.Dance();
        }    
    }

	    public virtual void Sing()
    {
        foreach (var member in _members)
        {
            member.Sing();
        }
    }

	    public void VoteLeader()
    {
        if (this._members.Count == 1)
        {
            throw new InvalidOperationException("You need at least two members to vote a new Leader.");
        }

        var newLeader = this.Leader;
        while (newLeader.Equals(this.Leader))
        {
            var randomLeader = 
                new Random().Next(this._members.Count);
            newLeader = this._members[randomLeader];
        }

        this.Leader.Say(
            String.Format(
                "{0} has been voted as our new party leader.",
                newLeader.Name));
        newLeader.Dance();
        this.Leader = newLeader;
    }
}



class Program
{
    static void Main(string[] args)
    {
        var jake = new Dog("Jake");
        var duke = new Dog("Duke");
        var lady = new Dog("Lady");
        var dakota = new Dog("Dakota");
        var dogsParty = new Party<Dog>(jake);

        dogsParty.AddMember(duke);
        dogsParty.AddMember(lady);
        dogsParty.AddMember(dakota);

		dogsParty.Dance();
        dogsParty.RemoveMember(duke);
        dogsParty.VoteLeader();
        dogsParty.Sing();

		var frog1 = new Frog("Frog #1");
        var frog2 = new Frog("Frog #2");
        var frog3 = new Frog("Frog #3");
        var frog4 = new Frog("Frog #4");
        var frogsParty = new Party<Frog>(frog1);

		frogsParty.AddMember(frog2);
        frogsParty.AddMember(frog3);
        frogsParty.AddMember(frog4);

		frogsParty.Dance();
        frogsParty.RemoveMember(frog3);
        frogsParty.VoteLeader();
        frogsParty.Sing();

        Console.ReadLine();
    }
}



public interface IDeeJay
{
    string Name { get; set; }

    void PlayMusicToDance();
    void PlayMusicToSing();
}



public class HorseDeeJay: IDeeJay
{
    protected string _name;

    public string Name
    {
        get { return this._name; }
        set { throw new InvalidOperationException("Name is a read-only property."); }
    }

    public HorseDeeJay(string name)
    {
        this._name = name;
    }

    public void PlayMusicToDance()
    {
        Console.WriteLine(
            String.Format(
                "My name is {0}. Let's Dance.", 
                this.Name));
    }

    public void PlayMusicToSing()
    {
        Console.WriteLine("Time to sing!");
    }
}



public class PartyWithDeeJay<T, K>: Party<T> where T: IAnimal
where K: IDeeJay 
{
    public K DeeJay { get; private set; }

    public PartyWithDeeJay(T leader, K deeJay): base(leader)
    {
        this.DeeJay = deeJay;
    }

	    public override void Dance()
    {
        this.DeeJay.PlayMusicToDance();
        base.Dance();
    }

	    public override void Sing()
    {
        this.DeeJay.PlayMusicToSing();
        base.Sing();
    }
}



class Program
{
    static void Main(string[] args)
    {
        var jake = new Dog("Jake");
        var duke = new Dog("Duke");
        var lady = new Dog("Lady");
        var dakota = new Dog("Dakota");
        var dogsParty = new Party<Dog>(jake);

        dogsParty.AddMember(duke);
        dogsParty.AddMember(lady);
        dogsParty.AddMember(dakota);

		dogsParty.Dance();
        dogsParty.RemoveMember(duke);
        dogsParty.VoteLeader();
        dogsParty.Sing();

		var frog1 = new Frog("Frog #1");
        var frog2 = new Frog("Frog #2");
        var frog3 = new Frog("Frog #3");
        var frog4 = new Frog("Frog #4");
        var frogsParty = new Party<Frog>(frog1);

		frogsParty.AddMember(frog2);
        frogsParty.AddMember(frog3);
        frogsParty.AddMember(frog4);

		frogsParty.Dance();
        frogsParty.RemoveMember(frog3);
        frogsParty.VoteLeader();
        frogsParty.Sing();

		var silver = new HorseDeeJay("Silver");
		var silverParty = new PartyWithDeeJay<Dog, HorseDeeJay>(jake, silver);

		silverParty.AddMember(duke);
		silverParty.AddMember(lady);
		silverParty.AddMember(dakota);

		silverParty.Dance();
		silverParty.RemoveMember(duke);
		silverParty.VoteLeader();
		silverParty.Sing();

        Console.ReadLine();
    }
}
