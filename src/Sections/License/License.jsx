import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";

const Statements = () => {
  return (
    <MainContent>
      <GlobalStyle />
      <Title>Licenses</Title>

      <WebLinkDiv1>
        <h1>EQ Configurator</h1>
        <h2>Copyright (C) 2021 Shawn Banasick</h2>

        <br />
        <span>
          This program is free software: you can redistribute it and/or modify
          it under the terms of the GNU General Public License as published by
          the Free Software Foundation, either version 3 of the License, or (at
          your option) any later version.
        </span>
        <hr />
        <span>
          {`THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
            'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
            LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
            FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
            COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
            INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
            BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
            LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
            CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
            LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
            ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGE.`}
        </span>
        <hr />
        <div style={{ marginTop: 35 }}>
          <span>Built with:</span>
          <ul>
            <li>Electron (MIT license)</li>
            <li>Electron Builder (MIT license)</li>
            <li>React (MIT license) </li>
            <li>React Easy State (MIT license)</li>
            <li>React Toastify (MIT license)</li>
            <li>Styled Components (MIT license)</li>
            <li>Lodash (MIT license)</li>
          </ul>

          <br />
          <br />
        </div>
      </WebLinkDiv1>
    </MainContent>
  );
};

export default view(Statements);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const MainContent = styled.div`
  box-sizing: border-box;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  width: calc(100vw - 137px);
  box-sizing: border-box;
  max-height: calc(100vh - 23px);
  overflow: auto;
  user-select: none;
`;

const WebLinkDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  /* grid-area: linkboxRow1; */
  /* height: 100px; */
  width: 80%;
  /* display: grid;
  justify-content: right; */
  font-size: 22px;
  margin-right: 3px;
  margin-left: 50px;
  margin-bottom: 3px;
  /* text-align: center; */
  user-select: none;
  line-height: 1.2;

  .link4 a {
    padding-bottom: 1px;
    text-decoration: none;
    color: #000;
    box-shadow: inset 0 -4px 0 var(--second-theme-color);
    transition: background-color 0.25s ease-out;
    margin-left: 5px;
  }

  .link4 a:hover {
    background-color: var(--second-theme-color);
    padding-top: 2px;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 5vw;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;
