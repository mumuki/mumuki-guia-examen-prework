describe("", () => {
  it("seAbre([10, -5, 3, 0], 4)", () => {
    assert(!seAbre([10, -5, 3, 0], 4))
  })
  
  it("seAbre([10, -5, 3, 0], 3)", () => {
    assert(!seAbre([10, -5, 3, 0], 3))
  })
  
  it("seAbre([10, -5, 3, 0], 2)", () => {
    assert(seAbre([10, -5, 3, 0], 2))
  })
  
  it("seAbre([10, -5, 3, 0], 1)", () => {
    assert(seAbre([10, -5, 3, 0], 1))
  })
  
    
  it("seAbre([0, 0, 3, 0], 3)", () => {
    assert(seAbre([0, 0, 3, 0], 3))
  })
  
})