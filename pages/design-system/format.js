import React from "react";
import TextareaExpandable from "@/components/Textarea/TextareaExpandable";
import { getLayout } from "@/components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Format</h1>

      {/* Structure */}
      <div className="mb-12" id="format">
        {/* simple list */}
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="">
              <div className="flex-1 space-y-4">
                <div className="format max-w-md mx-auto py-8">
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    sed orci auctor dolor molestie rutrum. Suspendisse et metus
                    quis nisi varius congue vitae porttitor sem. Aenean vel
                    tristique felis, at vehicula odio.
                  </p>

                  <p>
                    Nunc quis vehicula tellus, volutpat pharetra est. Sed
                    bibendum risus in ex facilisis pretium. Nam ac condimentum
                    eros, id egestas eros. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Curabitur rhoncus eget odio
                    non ornare. Nullam nec massa{" "}
                    <a
                      href="https://stryda.gg/games/valorant-esports"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ultricies, finibus dolor ac
                    </a>
                    , blandit ex.
                  </p>
                  <figure>
                    <blockquote cite="https://www.huxley.net/bnw/four.html">
                      <p>
                        Words can be like X-rays, if you use them properly—they
                        will go through anything. You read and you are pierced.
                      </p>
                    </blockquote>
                    <figcaption>
                      —Aldous Huxley, <cite>Brave New World</cite>
                    </figcaption>
                  </figure>
                  <p>
                    Aliquam sed tristique diam. Quisque fermentum augue ex, at
                    eleifend mauris pulvinar eget. Praesent ut magna nulla.
                    Donec dolor mauris, porttitor non semper a, semper id nisi.
                    Etiam laoreet libero vitae tempus mollis.
                  </p>
                  <h2>Quisque lacinia</h2>
                  <p>
                    Suspendisse malesuada elit augue, in commodo lectus auctor
                    sit amet. Cras consectetur purus vestibulum interdum
                    iaculis. Nunc ligula velit, lacinia sed ligula quis, rhoncus
                    ultrices nibh. Aliquam porttitor egestas fermentum. Donec
                    efficitur commodo mauris et sollicitudin.
                  </p>
                  <hr />
                  <p>
                    Curabitur dolor tellus, efficitur ac lacus eu, suscipit
                    maximus diam. Ut vel aliquet orci. Curabitur nunc dolor,
                    mollis porttitor erat non, ultricies pharetra nisi.
                  </p>
                  <h3>Suscipit maximus diam</h3>
                  <h4>Orci varius</h4>
                  <p>
                    Cras ut lobortis ligula. Mauris bibendum urna et maximus
                    sagittis. Duis eleifend ultrices nisl ut gravida. Fusce
                    malesuada massa in ligula cursus pulvinar. Donec mattis,
                    elit id dictum congue, mi est ornare turpis.
                  </p>
                  <h4>Proin sagittis tristique</h4>
                  <p>
                    At volutpat lectus tortor id odio. Sed nec bibendum ligula,
                    non hendrerit sapien. Cras vel justo ut risus facilisis
                    auctor eu quis lorem.
                  </p>
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                      alt=""
                    />
                    <figcaption>
                      <p>Digital art by Unsplash</p>
                    </figcaption>
                  </figure>
                  <h2>Integer commodo</h2>
                  <p>
                    First of all you need to understand how Flowbite works. This
                    library is not another framework. Rather, it is a set of
                    components based on Tailwind CSS that you can just
                    copy-paste from the documentation.
                  </p>
                  <ul>
                    <li>
                      <strong>Lorem ipsum</strong> dolor sit amet, consectetur
                      adipiscing elit.
                    </li>
                    <li>
                      <strong>Curabitur</strong> quis leo sed dui dictum egestas
                      vel scelerisque velit.
                    </li>
                    <li>
                      <strong>Ut eget</strong> felis eget dolor viverra
                      ullamcorper quis eu metus.
                    </li>
                    <li>
                      <strong>Nulla non</strong> dui vestibulum, pellentesque
                      ante eu, facilisis dolor.
                    </li>
                    <li>
                      <strong>Praesent</strong> venenatis tortor vel pharetra
                      dapibus.
                    </li>
                  </ul>
                  <ol>
                    <li>
                      <strong>Nam in arcu</strong> lobortis, pharetra ligula et,
                      auctor enim.
                    </li>
                    <li>
                      <strong>Aliquam vel</strong> dui semper, sollicitudin nibh
                      ac, tincidunt augue.
                    </li>
                    <li>
                      <strong>Integer sodales</strong> lorem vitae gravida
                      eleifend.
                    </li>
                    <li>
                      <strong>In ullamcorper</strong> nisi consequat consectetur
                      bibendum.
                    </li>
                    <li>
                      <strong>Vestibulum</strong> tempor lorem sit amet
                      ullamcorper mattis.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3rvy5pgf/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
