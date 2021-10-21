it('igualdade',()=>{
    const a=1
    expect(a).equal(1)
    expect(a,'Deveria ser 1').equal(1)
    expect(a).to.be.equal(1)
    expect(a).not.be.equal('b')

})

it('Booleano ',()=>{
    const a=true
    const b=null
    let c

    expect(a).to.be.true
    expect(true).to.be.true
    expect(b).to.be.null
    expect(a).not.be.null
    expect(c).to.be.undefined
})

it('Comparar objetos',()=>{
const obj={
    a:1,
    b:2
}

expect(obj).equal(obj);
expect(obj).equals(obj);
expect(obj).eq(obj);
expect(obj).to.be.deep.equal({a:1,b:2})
expect(obj).eql({a:1,b:2})
expect(obj).include({a:1})
expect(obj).to.have.property('b')
expect(obj).to.have.property('b',2)

})

it('Arrays',()=>{
    const arr=[1,2,3]

    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Tipos',()=>{
    const num=1
    const str='String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.a('object')
    expect([]).to.be.a('array')
})

it('Strings',()=>{
    const str = 'String de teste';

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.be.contains('String')
    expect(str).to.match(/^String/)
    expect(str).to.match(/teste$/)
    expect(str).to.match(/.{15}/)
    expect(str).to.match(/\w+/)
    expect(str).to.match(/\D+/)
})

it('Numeros',()=>{
    const number=4;
    const float=5.2164

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(7)
    expect(float).to.be.equal(5.2164)
    expect(float).to.be.closeTo(5.2,0.1)
})