describe("", () => {
  it("seAbre([10, -5, 3, 0], 4)", () => {
    assert(seAbre([10, -5, 3, 0], 4), false)
  })
  
  it("seAbre([10, -5, 3, 0], 3)", () => {
    assert(seAbre([10, -5, 3, 0], 3), false)
  })
  
  it("seAbre([10, -5, 3, 0], 2)", () => {
    assert(seAbre([10, -5, 3, 0], 2), true)
  })
  
  it("seAbre([10, -5, 3, 0], 1)", () => {
    assert(seAbre([10, -5, 3, 0], 1), true)
  })
  
    
  it("seAbre([0, 0, 3, 0], 3)", () => {
    assert(seAbre([0, 0, 3, 0], 3), true)
  })
  
})