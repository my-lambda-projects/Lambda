class BryanGuner extends SoftwareEngineer {
  constructor ( project ) {
    this.skills = [ 'javascript', 'react', 'redux', 'express', 'node', 'python', 'sql' ]
    this.project = project;
  }
  workHard () {
    while ( today() !== deadline() ) {
      this.skills.forEach( skill => this.project.push( writeCode( skill ) ) )
    }
  }
}
