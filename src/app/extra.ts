export class ExtraMock {
    private datos: string[] = [];
  
    constructor() {
      for (let i = 0; i < 100; i++) {
        this.datos.push(`Elemento ${i}`);
      }
    }
  
    getAll(): string[] {
      return [...this.datos];
    }
  
    findByKeyword(keyword: string): string[] {
      return this.datos.filter(d => d.includes(keyword));
    }
  }