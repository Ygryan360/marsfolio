
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Engine, ISourceOptions } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";



const ParticlesComponent = (props: { id: string }) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() =>
  ({
    background: {
      color: {
        value: "#1B1617",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        push: {
          distance: 200,
          duration: 15,
        },
        grab: {
          distance: 150,
        },
      },
    },
    particles: {
      color: {
        value: "#FFFFFF",
      },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 150,
      },
      opacity: {
        value: 1.0,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }),
    [],
  );


  if (init) {
    return <Particles id={props.id} options={options} />;
  }

  return null;
};
export default ParticlesComponent;