class DisplayObject{
    constructor(type){
        this.type = type;
        this.color = 0xffffff;
        this.oldMaterial = null;
        //['Cube', 'Sphere','Cone','Cylinder','Torus','Tea pot']
        this.geometries = {
            "Sphere": new THREE.SphereGeometry( 1, 32, 32 ),
            "Cube": new THREE.BoxGeometry( 1, 1, 1 ),
            "Cylinder": new THREE.CylinderGeometry( 1, 1, 3, 32 ),
            "Torus": new THREE.TorusGeometry( 1, 0.5, 16, 100 ), //radius, tube, radialSegments, tubularSegments
            "Cone": new THREE.ConeGeometry( 1, 3, 32 ),
        };
        this.materials = new THREE.MeshStandardMaterial( this.color );
        this.mesh = new THREE.Mesh(this.geometries[type], this.materials);
        this.display = this.mesh;
    }
    updateGeometry(type){
        this.mesh.geometry.dispose();
        this.mesh.geometry = this.geometries[type];
    }
    updateColor(color){
        this.mesh.material.color.set(color);
    }
    updateSurface(value){
        if(value === "Solid"){
            this.swapSolid();
        }
        else if(value === "Point"){
            this.swapPoint();
        }else if(value === "Line"){
            this.swapLine();
        }
    }
    swapPoint(){
        
    }
    swapLine(){
        var wireframe = new THREE.WireframeGeometry(this.mesh.geometry);
        var line = new THREE.LineSegments(wireframe);
        line.material.depthTest = false;
        line.material.opacity = 0.25;
        line.material.transparent = true;
        this.display = line;
    }   
    swapSolid(){
        this.display = this.mesh;
    }
    
}