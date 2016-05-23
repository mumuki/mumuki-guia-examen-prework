describe("", () => {
  it("escalera(3)", () => {
    assert.equal(
      escalera(3), 
      [
        "  #",
        " ##",
        "###"])
  })
  
  it("escalera(4)", () => {
    assert.equal(
      escalera(4), 
      [
        "   #",
        "  ##",
        " ###",
        "####"])
  })
  
  it("escalera(5)", () => {
    assert.equal(
      escalera(5), 
      [
        "    #",
        "   ##",
        "  ###",
        " ####",
        "#####"])
  })
  
  
  it("escalera(100).length", () => {
    assert.equal(escalera(100).length, 100)
  })
  
  it("escalera(50).length", () => {
    assert.equal(escalera(50).length, 50)
  })
  
  
  it("escalera(60)", () => {
    var e = escalera(60)
    assert.equal(e[0].length, 60);
    assert.equal(e[59].length, 60);
  })
  
})