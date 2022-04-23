AFRAME.registerComponent('boxes',{
    schema:{
        height:{
            type:'number',
            default:3
        },
        width:{
            type:'number',
            default:3
        },
        depth:{
            type:'number',
            default:3
        },
    },
    init: function(){
        for(var i=0; i<20; i++){
            var boxEntity = document.createElement('a-entity')
            boxEntity.setAttribute('id','box'+ i)
            var posX = Math.random() * 200 - 100
            var posY = 1.5
            var posZ = Math.random() * 200 - 100
            var position = {x:posX, y:posY, z:posZ}

            boxEntity.setAttribute('position',position)
            boxEntity.setAttribute('geometry',{
                primitive:'box',
                height:this.data.height,
                width:this.data.width,
                depth:this.data.depth
            })
            boxEntity.setAttribute('material',{
                src:'./images/boxtexture1.jpg',
                repeat:'1 1 1'
            })
            boxEntity.setAttribute('static-body',{})
            var scene = document.querySelector('#scene')

            scene.appendChild(boxEntity)
        }
    }
})